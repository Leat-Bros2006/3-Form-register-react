import { useState } from "react";

export default function Form() {

    const [students, setStudents] = useState([]);

    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [gender, setGender] = useState("");
    const [course, setCourse] = useState();

    const [error, setError] = useState({})

    // validate form
    const validate = () => {
        let newError = {}

        if (!fullname.trim()) {
            newError.fullname = "Full name is required"
        }

        if (!email.trim()) {
            newError.email = "Email is required"
        } else if (!email.includes("@")) {
            newError.email = "Invalid email"
        }

        if (!phone.trim()) {
            newError.phone = "Phone is requied";
        } else if (phone.length < 9) {
            newError.phone = "Phone number must be at least 9 digits"
        }

        if (!gender) {
            newError.gender = "Please select gender"
        }

        if (!course) {
            newError.course = "Please select course"
        }

        setError(newError)

        return Object.keys(newError).length === 0
    }

    // form
    const handleSubmit = () => {

        let isValidate = validate()

        if (!isValidate) {
            return;
        }

        // បង្កើត Object សម្រាប់សិស្សម្នាក់
        const newStudent = {
            id: Date.now(),
            fullname: fullname,
            email: email,
            phone: phone,
            gender: gender,
            course: course
        };

        // បញ្ចូលសិស្សថ្មីទៅក្នុង Array
        setStudents([
            ...students,
            newStudent
        ]);

        // Clear Form បន្ទាប់ពី Register
        setFullname("");
        setEmail("");
        setPhone("");
        setGender("");
        setCourse("");
    };

    return (
        <div className="container">
            {/* FORM */}
            <div className="form-card">
                <h2>Student Registration</h2>
                <p>Fill in your information below</p>
                <section>
                    <div className="input-group">
                        <label>Full Name</label>
                        <input
                            type="text"
                            placeholder="Enter your full name"
                            value={fullname}
                            onChange={(e) => setFullname(e.target.value)}
                        />
                        {
                            error.fullname ? (
                                <small className="error">{error.fullname}</small>
                            ) : null
                        }
                    </div>
                    <div className="input-group">
                        <label>Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {
                            error.email ? (
                                <small className="error">{error.email}</small>
                            ) : null
                        }
                    </div>
                    <div className="input-group">
                        <label>Phone</label>
                        <input
                            type="number"
                            placeholder="Enter phone number"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                        {
                            error.phone ? (
                                <small className="error">{error.phone}</small>
                            ) : null
                        }
                    </div>
                    <div className="input-group">
                        <label>Gender</label>
                        <div className="gender">
                            <label>
                                <input
                                    type="radio"
                                    name="gender"
                                    value="Male"
                                    checked={gender === "Male"}
                                    onChange={(e) => setGender(e.target.value)}
                                />
                                Male
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="gender"
                                    value="Female"
                                    checked={gender === "Female"}
                                    onChange={(e) => setGender(e.target.value)}
                                />
                                Female
                            </label>
                        </div>
                        {
                            error.gender ? (
                                <small className="error">{error.gender}</small>
                            ) : null
                        }
                    </div>
                    <div className="input-group">
                        <label>Course</label>
                        <select
                            value={course}
                            onChange={(e) => setCourse(e.target.value)}
                        >
                            <option>Choose course</option>
                            <option>React JS</option>
                            <option>Node JS</option>
                            <option>Python</option>
                            <option>UI/UX</option>
                        </select>
                        {
                            error.course ? (
                                <small className="error">
                                    {error.course}
                                </small>
                            ) : null
                        }
                    </div>
                    <button onClick={handleSubmit} type="button">
                        Register
                    </button>
                </section>
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
                                students.map((student, index) => (
                                    <tr key={student.id}>
                                        <td>{index + 1}</td>
                                        <td>{student.fullname}</td>
                                        <td>{student.email}</td>
                                        <td>{student.phone}</td>
                                        <td>{student.gender}</td>
                                        <td>{student.course}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}