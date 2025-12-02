import React, { useState } from "react";

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    cleaner: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const appointment = {
      ...formData,
      createdAt: new Date().toLocaleString()
    };

    // store locally (simulate admin page)
    let appointments = JSON.parse(localStorage.getItem("appointments") || "[]");
    appointments.push(appointment);
    localStorage.setItem("appointments", JSON.stringify(appointments));

    // show alert
    window.alert("✅ Your appointment was successfully booked!");

    // reset form
    setFormData({
      name: "",
      phone: "",
      service: "",
      cleaner: ""
    });
  };

  return (
    <section className="ftco-appointment ftco-section ftco-no-pt ftco-no-pb">
      <div className="overlay"></div>
      <div className="container">
        <div className="row d-md-flex justify-content-center">
          <div className="col-md-12">
            <div className="wrap-appointment bg-white d-md-flex pl-md-4 pb-5 pb-md-0">
              <form onSubmit={handleSubmit} className="appointment w-100">
                <div className="row justify-content-center">
                  {/* Name */}
                  <div className="col-12 col-md d-flex align-items-center pt-4 pt-md-0">
                    <div className="form-group py-md-4 py-2 px-4 px-md-0">
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                  </div>
                  {/* Phone */}
                  <div className="col-12 col-md d-flex align-items-center">
                    <div className="form-group py-md-4 py-2 px-4 px-md-0">
                      <label htmlFor="phone">Phone number</label>
                      <input
                        type="text"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Phone number"
                        required
                      />
                    </div>
                  </div>
                  {/* Service */}
                  <div className="col-12 col-md d-flex align-items-center">
                    <div className="form-group py-md-4 py-2 px-4 px-md-0">
                      <label htmlFor="service">Select Services</label>
                      <div className="form-field">
                        <div className="select-wrap">
                          <div className="icon">
                            <span className="fa fa-chevron-down"></span>
                          </div>
                          <select
                            id="service"
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            className="form-control"
                            required
                          >
                            <option value="">Select Services</option>
                            <option value="House Cleaning">House Cleaning</option>
                            <option value="Hotel Cleaning">Hotel Cleaning</option>
                            <option value="Office Cleaning">Office Cleaning</option>
                            <option value="Pool Cleaning">Pool Cleaning</option>
                            <option value="Garden Cleaning">Garden Cleaning</option>
                            <option value="Window Cleaning">Window Cleaning</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Cleaner */}
                  <div className="col-12 col-md d-flex align-items-center pb-4 pb-md-0">
                    <div className="form-group py-md-4 py-2 px-4 px-md-0">
                      <label htmlFor="cleaner">Select Cleaner</label>
                      <div className="form-field">
                        <div className="select-wrap">
                          <div className="icon">
                            <span className="fa fa-chevron-down"></span>
                          </div>
                          <select
                            id="cleaner"
                            name="cleaner"
                            value={formData.cleaner}
                            onChange={handleChange}
                            className="form-control"
                            required
                          >
                            <option value="">Select Cleaners</option>
                            <option value="Anbu">Anbu</option>
                            <option value="Koushik">Koushik</option>
                            <option value="Sanjay">Sanjay</option>
                            <option value="Thompson">Thompson</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Submit */}
                  <div className="col-12 col-md d-flex align-items-center align-items-stretch">
                    <div className="form-group py-md-4 py-2 px-4 px-md-0 d-flex align-items-stretch bg-primary">
                      <input
                        type="submit"
                        value="Make an Appointment"
                        className="btn btn-primary py-3 px-4"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentForm;
