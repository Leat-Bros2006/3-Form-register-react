import React from 'react'

const ForTeach = () => {
    return (
        <div className="container">
            {/* FORM */}
            <div className="form-card">
                <h2>Student Registration</h2>
                <p>Fill in your information below</p>

                <form>

                    <div className="input-group">
                        <label>Full Name</label>
                        <input type="text" placeholder="Enter your full name" />
                    </div>


                    <div className="input-group">
                        <label>Email</label>
                        <input type="email" placeholder="Enter your email" />
                    </div>

                    <div className="input-group">
                        <label>Phone</label>
                        <input type="text" placeholder="Enter phone number" />
                    </div>


                    <div className="input-group">
                        <label>Password</label>
                        <input type="password" placeholder="Enter password" />
                    </div>


                    <div className="input-group">
                        <label>Gender</label>

                        <div className="gender">

                            <label>
                                <input
                                    type="radio"
                                    name="gender"
                                /> Male
                            </label>


                            <label>
                                <input type="radio" name="gender" />
                                Female
                            </label>

                        </div>

                    </div>


                    <div className="input-group">
                        <label>Course</label>

                        <select>
                            <option>React JS</option>
                            <option>Node JS</option>
                            <option>Python</option>
                            <option>UI/UX</option>
                        </select>

                    </div>


                    <button type="button">
                        Register
                    </button>


                </form>

            </div>



            {/* TABLE */}
            <div className="table-card">

                <h2>Student List</h2>

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

                        <tr>
                            <td>1</td>
                            <td>John Doe</td>
                            <td>john@gmail.com</td>
                            <td>012345678</td>
                            <td>Male</td>
                            <td>React JS</td>
                        </tr>


                        <tr>
                            <td>2</td>
                            <td>Sarah Lee</td>
                            <td>sarah@gmail.com</td>
                            <td>098765432</td>
                            <td>Female</td>
                            <td>UI/UX</td>
                        </tr>


                    </tbody>

                </table>

            </div>


        </div>
    );
}

export default ForTeach