import React from "react";
import paymentForm from "./payForm.module.scss";
import {
  initialValues,
  paymentSchema,
} from "../../../../validation/pay.validation";
import { Formik, Field, Form } from "formik";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../../../Redux/Actions/UserCourse/index";
import { useSelector } from "react-redux";
import { State } from "../../../../Redux/Reducers/rootReducer";
import { useMutation } from "@apollo/client";
import { CREATE_USER_COURSE } from "../../../../graphql/userCourse/mutation/createUserCourse";
import { UserCourseInfos } from "../../../../Redux/Interfaces/UserCourse";
import { Quiz } from "../../../../Redux/Interfaces/Quiz";
import { User } from "../../../../Redux/Interfaces/User";

interface Props {
  user: User;
  quiz: Quiz;
  metting: number;
}

const PayForm = ({ user, quiz, metting }: Props) => {
  const dispatch = useDispatch();
  const { addCardInfos } = bindActionCreators(actionCreators, dispatch);
  const [craeteUserCourse, { data }] = useMutation(CREATE_USER_COURSE);
  const { userCourse }: { userCourse: UserCourseInfos } = useSelector(
    (state: State) => state
  );
  return (
    <div className={paymentForm.mainContainer}>
      <Formik
        initialValues={initialValues}
        validationSchema={paymentSchema}
        onSubmit={async (data) => {
          addCardInfos({
            card_number: data.cardNumber,
            cvv: data.cvv,
            expire_m: data.month,
            expire_y: data.year,
            owner: data.ownerName,
            threeD: data.threeD,
          });
          craeteUserCourse({
            variables: {
              createUserCourseInput: {
                card_number: data.cardNumber,
                cvv: data.cvv,
                expire_m: data.month,
                expire_y: data.year,
                owner: data.ownerName,
                threeD: data.threeD,
                plan_id: userCourse.courseInfos.plan_id,
                course_id: userCourse.courseInfos.id,
                time: userCourse.courseInfos.time,
                quiz: quiz,
                address: userCourse.addressInfos.address,
                city: userCourse.addressInfos.city,
                zip_code: userCourse.addressInfos.zip_code,
                phone_number: userCourse.addressInfos.phone_number,
                user_id: user.user_id,
              },
            },
          });
        }}
      >
        {({ errors, touched, isValid, dirty }) => (
          <Form className={paymentForm.fields}>
            <div className={paymentForm.inputsContainer}>
              <div className={paymentForm.holder}>
                <Field
                  as={TextField}
                  variant="outlined"
                  label="Card Number"
                  id="cardNumber"
                  name="cardNumber"
                  className={paymentForm.fieldE}
                  enterKeyHint="next"
                  required
                />
                {errors.cardNumber && touched.cardNumber ? (
                  <label className={paymentForm.error}>
                    {errors.cardNumber}
                  </label>
                ) : (
                  <label className={paymentForm.errorC}>
                    Plaese enter your card number
                  </label>
                )}
              </div>
              <div className={paymentForm.holder}>
                <Field
                  as={TextField}
                  variant="outlined"
                  label="Card Owner"
                  name="ownerName"
                  className={paymentForm.fieldE}
                  enterKeyHint="next"
                  required
                />
                {errors.ownerName && touched.ownerName ? (
                  <label className={paymentForm.error}>
                    {errors.ownerName}
                  </label>
                ) : (
                  <label className={paymentForm.errorC}>
                    Plaese enter card owner name
                  </label>
                )}
              </div>
            </div>
            <div className={paymentForm.inputsContainer}>
              <div className={paymentForm.holder}>
                <Field
                  as={Select}
                  label="Expire Year"
                  variant="outlined"
                  className={paymentForm.fieldE}
                  name="year"
                  enterKeyHint="next"
                  required
                >
                  <MenuItem value="" selected disabled hidden>
                    Year
                  </MenuItem>
                  <MenuItem value="2022">2022</MenuItem>
                  <MenuItem value="2023">2023</MenuItem>
                  <MenuItem value="2024">2024</MenuItem>
                  <MenuItem value="2025">2025</MenuItem>
                  <MenuItem value="2026">2026</MenuItem>
                  <MenuItem value="2027">2027</MenuItem>
                  <MenuItem value="2028">2028</MenuItem>
                  <MenuItem value="2029">2029</MenuItem>
                  <MenuItem value="2030">2030</MenuItem>
                  <MenuItem value="2031">2031</MenuItem>
                  <MenuItem value="2032">2032</MenuItem>
                  <MenuItem value="2033">2033</MenuItem>
                  <MenuItem value="2034">2034</MenuItem>
                  <MenuItem value="2035">2035</MenuItem>
                  <MenuItem value="2036">2036</MenuItem>
                  <MenuItem value="2037">2037</MenuItem>
                  <MenuItem value="2038">2038</MenuItem>
                  <MenuItem value="2039">2039</MenuItem>
                  <MenuItem value="2040">2040</MenuItem>
                  <MenuItem value="2041">2041</MenuItem>
                </Field>
                {errors.year && touched.year ? (
                  <label className={paymentForm.error}>{errors.year}</label>
                ) : (
                  <label className={paymentForm.errorC}>
                    Plaese enter expire year
                  </label>
                )}
              </div>
              <div className={paymentForm.holder}>
                <Field
                  variant="outlined"
                  as={Select}
                  className={paymentForm.fieldE}
                  label="Month"
                  name="month"
                  enterKeyHint="next"
                  required
                >
                  <MenuItem value="" selected disabled hidden>
                    Month
                  </MenuItem>
                  <MenuItem value="01">01</MenuItem>
                  <MenuItem value="02">02</MenuItem>
                  <MenuItem value="03">03</MenuItem>
                  <MenuItem value="04">04</MenuItem>
                  <MenuItem value="05">05</MenuItem>
                  <MenuItem value="06">06</MenuItem>
                  <MenuItem value="07">07</MenuItem>
                  <MenuItem value="08">08</MenuItem>
                  <MenuItem value="09">09</MenuItem>
                  <MenuItem value="10">10</MenuItem>
                  <MenuItem value="11">11</MenuItem>
                  <MenuItem value="12">12</MenuItem>
                </Field>
                {errors.month && touched.month ? (
                  <label className={paymentForm.error}>{errors.month}</label>
                ) : (
                  <label className={paymentForm.errorC}>
                    Plaese enter expire month
                  </label>
                )}
              </div>
            </div>
            <div className={paymentForm.inputsContainer}>
              <div className={paymentForm.holder}>
                <Field
                  as={TextField}
                  label={"CVV"}
                  className={paymentForm.fieldE}
                  name="cvv"
                  inputMode="numeric"
                  enterKeyHint="done"
                  required
                />
                {errors.cvv && touched.cvv ? (
                  <label className={paymentForm.error}>{errors.cvv}</label>
                ) : (
                  <label className={paymentForm.errorC}>Plaese enter CVV</label>
                )}
              </div>
            </div>
            {/* <div className={paymentForm.inputsContainer}>
              <div className={paymentForm.holderCheck}>
                <div className={paymentForm.switchBox}>
                  <Field
                    as={Checkbox}
                    className={paymentForm.cbx}
                    id="cbx"
                    name="threeD"
                  />
                </div>
                <label
                  // for="cbx"
                  className={paymentForm.errorC}
                >
                  3D Secure
                </label>
              </div>
            </div> */}
            <div className={paymentForm.inputsContainer}>
              <div className={paymentForm.holderCheck}>
                <div className={paymentForm.switchBox}>
                  <Field
                    as={Checkbox}
                    type="checkbox"
                    className={paymentForm.cbx}
                    id="agree"
                    name="agree"
                    required
                  />
                </div>
                {errors.agree && touched.agree ? (
                  <label className={paymentForm.error}>{errors.agree}</label>
                ) : (
                  <label
                    //  for="agree"
                    className={paymentForm.errorC}
                  >
                    I Agree With Terms
                  </label>
                )}
              </div>
            </div>
            <div className={paymentForm.loginOr}>
              <button
                type="submit"
                disabled={!isValid && dirty}
                className={
                  !isValid ? paymentForm.confrimBtnD : paymentForm.confrimBtn
                }
              >
                Pay
              </button>
              {/* {!loading && !payLoading ? (
                <button
                  type="submit"
                  disabled={!isValid && dirty}
                  className={
                    !isValid ? paymentForm.confrimBtnD : paymentForm.confrimBtn
                  }
                >
                  Pay
                </button>
              ) : (
                <button disabled={true} className={paymentForm.button}>
                  <span className={paymentForm.buttonLoading}> </span>
                </button>
              )} */}
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default PayForm;
