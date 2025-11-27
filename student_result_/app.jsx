const { useState } = React;

const BASE = 'http://localhost:3000/students';

// ---- studentService (simple) ----
async function getStudents() {
  const res = await fetch(BASE);
  if (!res.ok) throw new Error('Failed to fetch');
  return res.json();
}
async function addStudent(student) {
  const res = await fetch(BASE, {
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify(student)
  });
  if (!res.ok) throw new Error('Failed to add');
  return res.json();
}
async function updateStudent(id, student) {
  const res = await fetch(`${BASE}/${id}`, {
    method: 'PUT',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify(student)
  });
  if (!res.ok) throw new Error('Failed to update');
  return res.json();
}
async function deleteStudent(id) {
  const res = await fetch(`${BASE}/${id}`, { method: 'DELETE' });
  if (!res.ok) throw new Error('Failed to delete');
  return true;
}

// ---- Components ----
function StudentList({ students, onLoad, onAdd, onEdit, onDelete, onView, loading }) {
  return (
    <div className="card">
      <div className="card-header">
        <h2>Students</h2>
        <div>
          <button className="btn primary" onClick={onLoad} disabled={loading}>{loading ? 'Loading...' : 'Load Students'}</button>
          <button className="btn" onClick={onAdd} style={{marginLeft:8}}>Add Student</button>
        </div>
      </div>
      <div className="card-body">
        <table>
          <thead>
            <tr><th>ID</th><th>Name</th><th>Section</th><th>Marks</th><th>Grade</th><th>Actions</th></tr>
          </thead>
          <tbody>
            {students && students.length>0 ? students.map(s=>(
              <tr key={s.id}>
                <td>{s.id}</td><td>{s.name}</td><td>{s.section}</td><td>{s.marks}</td><td>{s.grade}</td>
                <td>
                  <button className="btn" onClick={()=>onEdit(s)}>Edit</button>
                  <button className="btn danger" onClick={()=>{ if(window.confirm('Delete this student?')) onDelete(s.id) }} style={{marginLeft:6}}>Delete</button>
                  <button className="btn" onClick={()=>onView(s)} style={{marginLeft:6}}>View</button>
                </td>
              </tr>
            )) : (
              <tr><td colSpan="6" style={{textAlign:'center'}}>No students loaded. Click "Load Students".</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function StudentForm({ initial = {name:'', section:'', marks:'', grade:''}, onCancel, onSave }) {
  const [name, setName] = useState(initial.name || '');
  const [section, setSection] = useState(initial.section || '');
  const [marks, setMarks] = useState(initial.marks !== undefined ? initial.marks : '');
  const [grade, setGrade] = useState(initial.grade || '');
  function submit(e) {
    e.preventDefault();
    if (!name.trim()) return alert('Name is required');
    if (marks === '' || Number.isNaN(Number(marks))) return alert('Valid marks required');
    if (Number(marks) < 0 || Number(marks) > 100) return alert('Marks must be between 0 and 100');
    const student = { name: name.trim(), section: section.trim(), marks: Number(marks), grade: grade.trim() };
    onSave(student);
  }
  return (
    <div className="card">
      <div className="card-header"><h2>{initial.id ? 'Edit Student' : 'Add Student'}</h2></div>
      <div className="card-body">
        <form onSubmit={submit} className="form-grid">
          <div className="form-row"><label>Name</label><input value={name} onChange={e=>setName(e.target.value)} type="text" /></div>
          <div className="form-row"><label>Section</label><input value={section} onChange={e=>setSection(e.target.value)} type="text" /></div>
          <div className="form-row"><label>Marks</label><input value={marks} onChange={e=>setMarks(e.target.value)} type="number" min="0" max="100" /></div>
          <div className="form-row"><label>Grade</label><input value={grade} onChange={e=>setGrade(e.target.value)} type="text" maxLength="2" /></div>
          <div className="form-actions">
            <button className="btn primary" type="submit">Save</button>
            <button className="btn" type="button" onClick={onCancel}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}

function StudentDetails({ student, onBack }) {
  if (!student) return null;
  return (
    <div className="card">
      <div className="card-header"><h2>Student Details</h2></div>
      <div className="card-body">
        <div className="details-grid">
          <div><strong>ID</strong></div><div>{student.id}</div>
          <div><strong>Name</strong></div><div>{student.name}</div>
          <div><strong>Section</strong></div><div>{student.section}</div>
          <div><strong>Marks</strong></div><div>{student.marks}</div>
          <div><strong>Grade</strong></div><div>{student.grade}</div>
        </div>
        <div style={{marginTop:12}}><button className="btn" onClick={onBack}>Back to List</button></div>
      </div>
    </div>
  );
}

// ---- App ----
function App() {
  const [students, setStudents] = useState([]);
  const [mode, setMode] = useState('list'); // list | add | edit | details
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(false);

  async function loadStudents() {
    setLoading(true);
    try {
      const data = await getStudents();
      setStudents(data);
    } catch (err) {
      alert('Error loading students: ' + err.message);
    } finally {
      setLoading(false);
    }
  }

  function handleAddClick() { setSelected(null); setMode('add'); }
  function handleEditClick(s) { setSelected(s); setMode('edit'); }
  function handleViewClick(s) { setSelected(s); setMode('details'); }

  async function handleDelete(id) {
    if (!window.confirm('Are you sure you want to delete?')) return;
    try {
      await deleteStudent(id);
      await loadStudents();
      alert('Deleted');
    } catch (err) {
      alert('Delete failed');
    }
  }

  async function handleSave(newStudent) {
    try {
      if (mode === 'add') {
        await addStudent(newStudent);
        alert('Added');
      } else if (mode === 'edit') {
        await updateStudent(selected.id, newStudent);
        alert('Updated');
      }
      setMode('list');
      await loadStudents();
    } catch (err) {
      alert('Save failed');
    }
  }

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Student Result Management</h1>
        <div className="sub">A small student project — React + JSON Server (no build tools)</div>
      </header>
      <main className="app-main" style={{padding:'18px 0'}}>
        {mode === 'list' && <StudentList students={students} onLoad={loadStudents} onAdd={handleAddClick} onEdit={handleEditClick} onDelete={handleDelete} onView={handleViewClick} loading={loading} />}
        {mode === 'add' && <StudentForm initial={{}} onCancel={()=>setMode('list')} onSave={handleSave} />}
        {mode === 'edit' && <StudentForm initial={selected} onCancel={()=>setMode('list')} onSave={handleSave} />}
        {mode === 'details' && <StudentDetails student={selected} onBack={()=>setMode('list')} />}
      </main>
      <footer className="app-footer">Made by a student - Simple Project</footer>
    </div>
  );
}

// render
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));
