class Person {
  private _documentNumber: string;
  private _fullName: string;
  constructor(documentNumber: string, fullName: string) {
    this._documentNumber = documentNumber;
    this._fullName = fullName;
  }

  printFullName() {
    console.log(this._fullName);
  }
}

class Student extends Person {
  private _codeStudent: string;
  private _codeSemester: string;
  constructor(codeStudent, codeSemester, documentNumber, fullName) {
    super(documentNumber, fullName);
    this._codeStudent = codeStudent;
    this._codeSemester = codeSemester;
  }
  get codeSemester() {
    return this._codeSemester;
  }
  set codeSemester(value: string) {
    this._codeSemester = value;
  }
}

const carlitos = new Student("001", "0245", "78451265", "Jose Del Solar");
carlitos.printFullName();
carlitos.codeSemester = "457845";
console.log(carlitos.codeSemester);
