import { useState } from "react";

export default function FormTest() {

    let [name, setName] = useState("")
    let [email, setEmail] = useState("")
    let [phone, setPhone] = useState("")
    let [gender, setGender] = useState("")
    let [course, setCourse] = useState("")
    let [students, setStudents] = useState([])


    let [error, setError] = useState({})

    function validation() {
        let newError = {}

        if (name == "") {
            newError.name = "Please enter your name!"
        }

        if (email == "") {
            newError.email = "Please enter your email!"
        }

        if (phone == "") {
            newError.phone = "Please enter your phone number!"
        }

        if (gender == "") {
            newError.gender = "Please select gender!"
        }

        if (course == "") {
            newError.course = "Please select course!"
        }

        setError(newError)

        // return Object.keys(newError).length === 0
        return Object.keys(newError).length === 0

    }

    console.log(error)


    function handleRegister() {

        let handleValidation = validation()

        if (!handleValidation) {
            return;
        }

        let newStudent = {
            ids: Date.now(),
            names: name,
            emails: email,
            phones: phone,
            genders: gender,
            courses: course
        }

        setStudents([...students, newStudent])

        // console.log(students)

        // clear value
        setName("")
        setEmail("")
        setPhone("")
        setGender("")
        setCourse("")
    }



    return (
        <main className="container">
            {/* FORM */}
            <div className="form-card">
                <h2>Student Registration</h2>
                <p>Fill in your information below</p>
                <form>
                    <div className="input-group">
                        <label>Full Name</label>
                        <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            placeholder="Enter your full name"
                        />
                        {/* {
                            error.name ? <small>{error.name}</small> : ""
                        } */}

                        {
                            error.name && <small className="error">{error.name}</small>
                        }
                    </div>
                    <div className="input-group">
                        <label>Email</label>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            placeholder="Enter your email"
                        />
                        {
                            error.email ? <small className="error">{error.email}</small> : ""
                        }
                    </div>
                    <div className="input-group">
                        <label>Phone</label>
                        <input
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            type="text"
                            placeholder="Enter phone number"
                        />
                        {
                            error.phone ? <small className="error">{error.phone}</small> : ""
                        }
                    </div>
                    <div className="input-group">
                        <label>Gender</label>
                        <div className="gender">
                            <label>
                                <input
                                    value="Male"
                                    checked={gender == "Male"}
                                    name="gender"
                                    onChange={(e) => setGender(e.target.value)}
                                    type="radio" /> Male
                            </label>
                            <label>
                                <input
                                    value="Female"
                                    checked={gender == "Female"}
                                    name="gender"
                                    onChange={(e) => setGender(e.target.value)}
                                    type="radio"
                                /> Female
                            </label>
                        </div>
                        {
                            error.gender ? <small className="error">{error.gender}</small> : ""
                        }
                    </div>
                    <div className="input-group">
                        <label>Course</label>
                        <select
                            value={course}
                            onChange={(e) => setCourse(e.target.value)}
                        >
                            <option value="" disabled>Select Course</option>
                            <option value="React JS">React JS</option>
                            <option value="Node JS">Node JS</option>
                            <option value="Python">Python</option>
                            <option value="UI/UX">UI/UX</option>
                        </select>
                        {
                            error.course ? <small className="error">{error.course}</small> : ""
                        }
                    </div>
                    <button onClick={handleRegister} type="button"> Register </button>
                </form>
            </div>

            {/* TABLE */}
            <div className="table-card">
                <h2>Student List</h2>
                <div className="table-responsive">
                    <table>
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Full Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Gender</th>
                                <th>Course</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                students.length === 0 ? (
                                    <tr>
                                        <td style={{textAlign: "center"}} colSpan="6">No Students</td>
                                    </tr>
                                ) : (
                                    students.map((item, index) => {
                                        return (
                                            <tr key={item.ids}>
                                                <td style={{ textAlign: "center" }}>{index + 1}</td>
                                                <td>{item.names}</td>
                                                <td>{item.emails}</td>
                                                <td>{item.phones}</td>
                                                <td>{item.genders}</td>
                                                <td>{item.courses}</td>
                                            </tr>
                                        )
                                    })
                                )
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    );
}