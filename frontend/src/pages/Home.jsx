

// // import React, { useEffect, useState } from "react";
// // import axios from "axios";
// // import "bootstrap/dist/css/bootstrap.min.css";
// // import { CiSquarePlus } from "react-icons/ci";
// // import { Link, useNavigate } from "react-router-dom";
// // import { useSnackbar } from "notistack";
// // import BookTable from "../components/Home/BookTable";

// // function Home() {
// //   const [workouts, setWorkouts] = useState([]);
// //   const [reload, setReload] = useState(false);
// //   const navigate = useNavigate();
// //   const { enqueueSnackbar } = useSnackbar();

// //   const usernameLocal = localStorage.getItem("user");

// //   useEffect(() => {
// //     if (!usernameLocal) {
// //       navigate("/");
// //     }
// //   }, [usernameLocal, navigate]);

// //   const handleLogOut = () => {
// //     localStorage.removeItem("token");
// //     localStorage.removeItem("user");
// //     navigate("/");
// //   };

// //   const token = localStorage.getItem("token");

// //   useEffect(() => {
// //     if (!token) {
// //       navigate("/");
// //       return;
// //     }

// //     axios
// //       .get("http://localhost:4444/workouts", {
// //         headers: {
// //           Authorization: `Bearer ${token}`,
// //         },
// //       })
// //       .then((response) => setWorkouts(response.data.data))
// //       .catch((error) => {
// //         console.error("Error fetching workouts:", error);
// //         navigate("/");
// //       });
// //   }, [token, navigate, reload]);

// //   return (
// //     <div className="container p-4">
// //       <div className="d-flex justify-content-between align-items-center">
// //         <h1 className="display-4 mt-5">Workouts List</h1>
// //         <Link to="/workouts/create">
// //           <CiSquarePlus className="display-5" />
// //         </Link>
// //         <span className="mx-2">Welcome, {usernameLocal}!</span>
// //         <button className="btn btn-primary" onClick={handleLogOut}>
// //           Log out
// //         </button>
// //       </div>

// //       <BookTable workouts={workouts} />
// //     </div>
// //   );
// // }

// // export default Home;



// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { CiSquarePlus } from "react-icons/ci";
// import { Link, useNavigate } from "react-router-dom";
// import { useSnackbar } from "notistack";
// import BookTable from "../components/Home/BookTable";

// function Home() {
//   const [workouts, setWorkouts] = useState([]);
//   const [reload, setReload] = useState(false);
//   const [excersize, setExcersize] = useState("");
//   const [load, setLoad] = useState("");
//   const [reps, setReps] = useState("");
  
//   const navigate = useNavigate();
//   const { enqueueSnackbar } = useSnackbar();

//   const usernameLocal = localStorage.getItem("user");

//   useEffect(() => {
//     if (!usernameLocal) {
//       navigate("/");
//     }
//   }, [usernameLocal, navigate]);

//   const handleLogOut = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("user");
//     navigate("/");
//   };

//   const token = localStorage.getItem("token");

//   useEffect(() => {
//     if (!token) {
//       navigate("/");
//       return;
//     }

//     axios
//       .get("http://localhost:4444/workouts", {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       })
//       .then((response) => setWorkouts(response.data.data))
//       .catch((error) => {
//         console.error("Error fetching workouts:", error);
//         navigate("/");
//       });
//   }, [token, navigate, reload]);

//   const handleSaveBooks = () => {
//     const formData = { excersize, load, reps };
//     axios.post("http://localhost:4444/workouts", formData, {
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//     })
//       .then(() => {
//         enqueueSnackbar("Workout created successfully", { variant: "success" });
//         setExcersize("");
//         setLoad("");
//         setReps("");
//         setReload(!reload);
//       })
//       .catch((error) => {
//         console.error(error);
//         enqueueSnackbar("An error occurred while creating the workout", { variant: "error" });
//       });
//   };

//   return (
//     <div className="container p-4">
//       <div className="d-flex justify-content-between align-items-center">
//         <h1 className="display-4 mt-5">Workouts List</h1>
//         <span className="mx-2">Welcome, {usernameLocal}!</span>
//         <button className="btn btn-primary" onClick={handleLogOut}>Log out</button>
//       </div>
      
//       <BookTable workouts={workouts} />
      
//       <div className="my-4">
//         <h2>Create New Workout</h2>
//         <div className="my-2">
//           <label>Exercise</label>
//           <input
//             type="text"
//             value={excersize}
//             onChange={e => setExcersize(e.target.value)}
//             className="form-control"
//           />
//         </div>
//         <div className="my-2">
//           <label>Load</label>
//           <input
//             type="number"
//             value={load}
//             onChange={e => setLoad(e.target.value)}
//             className="form-control"
//           />
//         </div>
//         <div className="my-2">
//           <label>Reps</label>
//           <input
//             type="number"
//             value={reps}
//             onChange={e => setReps(e.target.value)}
//             className="form-control"
//           />
//         </div>
//         <button className="btn btn-success mt-3" onClick={handleSaveBooks}>Save Workout</button>
//       </div>
//     </div>
//   );
// }

// export default Home;



import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { CiSquarePlus } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import BookTable from "../components/Home/BookTable";

function Home() {
  const [workouts, setWorkouts] = useState([]);
  const [reload, setReload] = useState(false);
  const [excersize, setExcersize] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const usernameLocal = localStorage.getItem("user");

  useEffect(() => {
    if (!usernameLocal) {
      navigate("/");
    }
  }, [usernameLocal, navigate]);

  const handleLogOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/");
      return;
    }

    axios
      .get("https://after-last-projectbackend.onrender.com/workouts", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setWorkouts(response.data.data))
      .catch((error) => {
        console.error("Error fetching workouts:", error);
        navigate("/");
      });
  }, [token, navigate, reload]);

  const handleSaveBooks = () => {
    const formData = { excersize, load, reps };
    axios.post("https://after-last-projectbackend.onrender.com/workouts", formData, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then(() => {
        enqueueSnackbar("Workout created successfully", { variant: "success" });
        setExcersize("");
        setLoad("");
        setReps("");
        setReload(!reload);
      })
      .catch((error) => {
        console.error(error);
        enqueueSnackbar("An error occurred while creating the workout", { variant: "error" });
      });
  };

  return (
    <div className="container p-4">
      <div className="row">
        <div className="col-md-6">
          <h2>Create New Workout</h2>
          <div className="my-2">
            <label>Exercise</label>
            <input
              type="text"
              value={excersize}
              onChange={e => setExcersize(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="my-2">
            <label>Load</label>
            <input
              type="number"
              value={load}
              onChange={e => setLoad(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="my-2">
            <label>Reps</label>
            <input
              type="number"
              value={reps}
              onChange={e => setReps(e.target.value)}
              className="form-control"
            />
          </div>
          <button className="btn btn-success mt-3" onClick={handleSaveBooks}>Save Workout</button>
        </div>
        <div className="col-md-6">
          <div className="d-flex justify-content-between align-items-center">
            <h1 className="display-4 mt-5">Workouts List</h1>
            <span className="mx-2">Welcome, {usernameLocal}!</span>
            <button className="btn btn-primary" onClick={handleLogOut}>Log out</button>
          </div>
          <BookTable workouts={workouts} />
        </div>
      </div>
    </div>
  );
}

export default Home;
