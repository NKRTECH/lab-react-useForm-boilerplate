import { useState } from 'react';
import './App.css';
import { useForm } from 'react-hook-form';

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  console.log(errors);

  function onSubmit(data) {
    console.log(data);
    setRegistrationSuccess(true);
  }

  return (
    <div className="registration-container">
      {registrationSuccess && <p className="success-message">Registration successful!</p>}

      <form className="registration-form" onSubmit={handleSubmit(onSubmit)}>
        <label className="form-label">First Name</label>
        <input
          type="text"
          placeholder="First Name"
          {...register('firstName', { required: true })}
          className="form-input"
        />
        <br />
        <label className="form-label">Last Name</label>
        <input
          type="text"
          placeholder="Last Name"
          {...register('lastName', { required: true })}
          className="form-input"
        />
        <br />
        <label className="form-label">Email</label>
        <input
          type="email"
          placeholder="Email ID"
          {...register('emailID', {
            required: 'Email is required.',
            pattern: /^\S+@\S+\.\S+$/,
          })}
          className="form-input"
        />
        <br />
        <span className="form-error">{errors.emailID?.message}</span>
        <br />
        <label className="form-label">Password</label>
        <input
          type="password"
          placeholder="Password"
          {...register('password', {
            required: 'Password is required.',
            minLength: {
              value: 4,
              message: 'Password must be more than 4 characters.',
            },
            maxLength: {
              value: 20,
              message: 'Password cannot be more than 20 characters.',
            },
          })}
          className="form-input"
        />
        <br />
        <span className="form-error">{errors.password?.message}</span>
        <br />
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
