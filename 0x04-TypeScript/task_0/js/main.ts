// main.ts

interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "New York",
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 22,
  location: "London",
};

const studentsList: Student[] = [student1, student2];

function renderTable(students: Student[]): void {
  const tableRows: string[] = [];

  students.forEach((student) => {
    const row = `${student.firstName}\t${student.location}`;
    tableRows.push(row);
  });

  const table = tableRows.join('\n');
  console.log(table);
}

renderTable(studentsList);

