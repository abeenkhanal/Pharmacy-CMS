import React, { useEffect, useState } from "react";
import axios from "axios";

const Dayfour = () => {
  const [courses, setCourses] = useState([]);

  const image="1.jpg";
// get method (read)
  const getCourse = () => {
    axios
      .get("https://hubmainback.hubit.com.np/courses")
      .then((result) => {
        console.log(result.data.result);

        setCourses([...result.data.result]);
      })
      .catch((error) => {
        console.log(error)
      });
  };

  useEffect(() => {
    getCourse();
  }, []);

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3  w-11/12 mx-auto py-10">
      {courses.map((val, i) => {
        return (
          <div className="border shadow-lg">
            
            <div className="bg-gray-100 relative mx-auto h-44 w-full text-white  flex items-end bg-gradient-to-r from-violet-200 to-indigo-200">
             <div className="absolute bottom-0 left-0 px-4">  {val.title}</div>
              <img src={image} alt="Imagess" className="w-full h-44 object-cover " />
            </div>

            <div className="flex flex-col gap-4 py-4">
              <div
                className="line-clamp-5 text-sm px-4 "
                dangerouslySetInnerHTML={{ __html: val.description }}
              />
              <div className="border-t-2  px-4 flex justify-between py-2">
                <div>{val.duration}</div>
                <div>{val.type}</div>

                {/* <div>{val?.category?.name}</div> */}
              </div>
            </div>
          </div>

        );
      })}
    </div>
  );
};

export default Dayfour;



// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const Dayfour = () => {
//   const [courses, setCourses] = useState([]);

//   const getCourse = () => {
//     axios
//       .get("https://hubmainback.hubit.com.np/courses")
//       .then((result) => {
//         console.log(result.data.result);
//         setCourses([...result.data.result]);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };
//   useEffect(() => {
//     getCourse();
//   }, []);
//https://hubmainback.hubit.com.np/category
//   return (
//     <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto w-11/12 py-10">
//       {courses.map((val, i) => {
//         return (
//           <div className="border shadow-lg">
//             <div className="bg-gray-200 mx-auto w-full h-44 flex px-4 items-end bg-gradient-to-t from-violet-200 to-pink-200">
//               {val.title}
//             </div>
//             <div className="flex flex-col gap-4 py-4">
//               <div
//                className="line-clamp-5 text-sm px-4 "
//               dangerouslySetInnerHTML={{ __html: val.description }}
//             />
//           <div className="border-t-2  px-4 flex justify-between py-2">
//        <div>{val.duration}</div>
//               <div>{val.type}</div>

//                 {/* <div>{val?.category?.name}</div> */}
//               </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default Dayfour;