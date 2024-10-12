export default function updateStudentGradeByCity(Students, targetlocation, newGrades) {
  // Step 1: Filter the students by city
  return Students
    .filter(({ location }) => location === targetlocation)
    .map((Students) => {
      // Step 2: Find the grade for the current student
      const xtargetNewGrade = newGrades.filter(({ studentId }) => studentId === Students.id);
      const { grade = 'N/A' } = xtargetNewGrade.length > 0 ? xtargetNewGrade[0] : {};
      return { ...Students, grade };
    });
}
