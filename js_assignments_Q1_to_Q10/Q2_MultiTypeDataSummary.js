// Q2. Multi-Type Data Summary
// Instructions followed: declare variables of various types, identify using typeof and Array.isArray(), print using one console.table().

// Sample data entries
const nameStr = "Aisha";
const ageNum = 21;
const hasKYC = true;
const tagsArr = ["new", "student", "premium"];
const profileObj = { id: 101, city: "Lucknow" };
const emptyVal = null;
let pending; // undefined

// Helper to get correct type label (arrays are objects in typeof, so detect separately)
function getType(value) {
  return Array.isArray(value) ? "array" : typeof value;
}

const report = [
  { label: "nameStr", value: nameStr, type: getType(nameStr) },
  { label: "ageNum", value: ageNum, type: getType(ageNum) },
  { label: "hasKYC", value: hasKYC, type: getType(hasKYC) },
  { label: "tagsArr", value: JSON.stringify(tagsArr), type: getType(tagsArr) },
  { label: "profileObj", value: JSON.stringify(profileObj), type: getType(profileObj) },
  { label: "emptyVal", value: emptyVal, type: getType(emptyVal) }, // typeof null -> "object" (JS quirk)
  { label: "pending", value: pending, type: getType(pending) }
];

console.table(report);
