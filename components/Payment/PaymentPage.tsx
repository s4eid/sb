import React, { useState } from "react";
import Pay from "./Pay/Pay";
import payment from "./payment.module.scss";
import Address from "./Address/Address";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Plan from "./Plan/Plan";
import { Course } from "./interface/payment.interface";
import Image from "next/image";
import { User } from "../../Redux/Interfaces/User";
import { Quiz } from "../../Redux/Interfaces/Quiz";
import moment from "moment";

interface Props {
  course: Course;
  user: User;
  quiz: Quiz;
  metting: number;
}

const Paymentpage = ({ course, quiz, user, metting }: Props) => {
  const [progress, setProgress] = useState(0);
  const steps = ["Select Your Plan", "Address And Contact Infos", "Payment"];
  return (
    <div className={payment.mainC}>
      <div className={payment.progress}>
        <Stepper activeStep={progress} alternativeLabel>
          {steps.map((label, index) => (
            <Step
              className={payment.step}
              onClick={() => {
                if (progress > index) {
                  setProgress(index);
                }
              }}
              key={label}
            >
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </div>
      <div className={payment.programC}>
        <div className={payment.programHolder}>
          <Image
            src={course.course.image}
            layout="fixed"
            width={150}
            height={100}
          />
          <p>{course.course.name}</p>
        </div>
        <div className={payment.quizDetails}>
          <p>Current Weight 📆</p>
          <p>{quiz.hW.weight} 🇰🇬</p>
        </div>
        <div className={payment.quizDetails}>
          <p>Target Weight 🏆</p>
          <p>{quiz.hW.target_weight} 🇰🇬</p>
        </div>
        <div className={payment.quizDetails}>
          <p>Metting Time 📅</p>
          <p>{moment(metting).format("MMMM Do YYYY, h:mm:ss a")}</p>
        </div>
      </div>
      {progress == 0 ? (
        <Plan
          plans={course.course.plans}
          courseName={course.course.name}
          courseCategory={course.course.category}
          courseId={course.course.course_id}
          setProgress={setProgress}
        />
      ) : progress == 1 ? (
        <Address setProgress={setProgress} />
      ) : (
        <Pay user={user} quiz={quiz} metting={metting} />
      )}
    </div>
  );
};

export default Paymentpage;
