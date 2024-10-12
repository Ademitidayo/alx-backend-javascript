export default function updateStudentGradeByCity(listStudents, targetlocation, newGrades) {
    // Step 1: Filter the students by city
    return listStudents
      .filter(({location}) => location === targetlocation)  // Only keep students in the specified city
      .map((listStudents) => {
        // Step 2: Find the grade for the current student
        const xtargetNewGrade = newGrades.filter(({ studentId }) => studentId === listStudents.id);
      const { grade = 'N/A' } = xtargetNewGrade.length > 0 ? xtargetNewGrade[0] : {};
      return { ...listStudents, grade };
    });
}