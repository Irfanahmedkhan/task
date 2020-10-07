import React from "react";

import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
  },

  taskOptions: {
    minHeight: "20vh",
    margin: "5px",
  },
  taskOptionsHeading: {
    backgroundColor: "lightgray",
    height: "6vh",
    display: "flex",
    alignItems: "center",
    paddingLeft: "10px",
  },
  taskOptionsRadio: {
    display: "flex",
    alignItems: "center",
    paddingLeft: "10px",
  },

  taskDescribe: {
    margin: "5px",
  },
  taskDescribeHeading: {
    backgroundColor: "lightgray",
    height: "6vh",
    display: "flex",
    alignItems: "center",
    paddingLeft: "10px",
  },
  taskDescribeForm: {
    display: "flex",
    flexDirection: "column",
    padding: "10px",
    paddingBottom: "20px",
  },

  taskSetting: {
    margin: "5px",
  },
  taskSettingHeading: {
    backgroundColor: "lightgray",
    height: "6vh",
    display: "flex",
    alignItems: "center",
    paddingLeft: "10px",
  },
  taskSettingDetails: {
    display: "flex",
    flexDirection: "column",
    padding: "10px",
    textAlign: "left",
  },

  taskRequirement: {
    margin: "5px",
    height: "30vh",
  },
  taskRequirementHeading: {
    backgroundColor: "lightgray",
    height: "6vh",
    display: "flex",
    alignItems: "center",
    paddingLeft: "10px",
  },
  taskRequirementRadio: {
    display: "flex",
    alignItems: "center",
    paddingLeft: "10px",
  },
  taskRequirementForm: {
    display: "flex",
    flexDirection: "column",
    paddingLeft: "10px",
    paddingBottom: "20px",
  },
}));

export default function MainPage() {
  const classes = useStyles();

  const [taskOption, settaskOption] = React.useState("Choice Task");
  const taskOptionHandler = (event) => {
    settaskOption(event.target.value);
  };
  console.log("taskOption", taskOption);

  const [masterWorker, setmasterWorker] = React.useState("Yes");
  const masterHandler = (event) => {
    setmasterWorker(event.target.value);
  };
  console.log("master", masterWorker);

  return (
    <Container maxWidth="lg" className={classes.root}>
      <div className={classes.taskOptions}>
        <div className={classes.taskOptionsHeading}>
          <h4>New Requester Task</h4>
        </div>

        <div className={classes.taskOptionsRadio}>
          <h4>Select Task Type: </h4>
          <RadioGroup
            aria-label="gender"
            name="gender1"
            value={taskOption}
            onChange={taskOptionHandler}
            row
            style={{ marginLeft: " 20px" }}
          >
            <FormControlLabel
              value="Choice Task"
              control={<Radio />}
              label="Choice Task"
            />
            <FormControlLabel
              value="Decision Making Task"
              control={<Radio />}
              label="Decision Making Task"
            />
            <FormControlLabel
              value="Sentence Level Task"
              control={<Radio />}
              label="Sentence Level Task"
            />
          </RadioGroup>
        </div>
      </div>

      <div className={classes.taskDescribe}>
        <div className={classes.taskDescribeHeading}>
          <h4>Describe your task to Workers</h4>
        </div>
        <div>
          <form className={classes.taskDescribeForm}>
            <TextField id="Title" label="Title" style={{ width: "20rem" }} />
            <TextField
              id="Description"
              label="Description"
              style={{ width: "20rem" }}
            />
            <TextField
              id="Expiry"
              label="Expiry Date"
              style={{ width: "20rem" }}
            />
          </form>
        </div>
      </div>
      <div className={classes.taskSetting}>
        <div className={classes.taskSettingHeading}>
          <h4>Setting up your Task</h4>
        </div>
        <div className={classes.taskSettingDetails}>
          {(() => {
            if (taskOption === "Choice Task") {
              return (
                <div className={classes.taskSettingDetails}>
                      
                          <h4>Select your Option/s</h4>
                  <FormControlLabel
                    control={<Checkbox defaultChecked name="Option 1" />}
                    label="Option 1"
                  />
                  <FormControlLabel
                    control={<Checkbox name="Option 2" />}
                    label="Option 2"
                  />
                  <FormControlLabel
                    control={<Checkbox name="option 3" />}
                    label="Option 3"
                  />
                </div>
              );
            } else if (taskOption === "Decision Making Task") {
              return (
                <>
                  <h4>Please select</h4>
                  <RadioGroup
                    aria-label="gender"
                    name="gender1"
                    value={masterWorker}
                    onChange={masterHandler}
                    row
                    style={{ marginLeft: " 20px" }}
                  >
                    <FormControlLabel
                      value="True"
                      control={<Radio />}
                      label="True"
                    />
                    <FormControlLabel
                      value="False"
                      control={<Radio />}
                      label="False"
                    />
                  </RadioGroup>
                </>
              );
            } else if (taskOption === "Sentence Level Task") {
              return (
                <>
                  <h4>Please type your Answer</h4>
                  <form className={classes.taskRequirementForm}>
                    <TextField
                      id="Answer"
                      label="Type your Answer"
                      style={{ width: "20rem" }}
                    />
                  </form>
                </>
              );
            }
          })()}
        </div>
      </div>
      <div className={classes.taskRequirement}>
        <div className={classes.taskRequirementHeading}>
          <h4>Setting up your Task</h4>
        </div>
        <div className={classes.taskRequirementRadio}>
          <h4>Require Master Workers</h4>
          <RadioGroup
            aria-label="gender"
            name="gender1"
            value={masterWorker}
            onChange={masterHandler}
            row
            style={{ marginLeft: " 20px" }}
          >
            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="No" control={<Radio />} label="No" />
          </RadioGroup>
        </div>
        <div className={classes.taskRequirementForm}>
          <form className={classes.taskRequirementForm}>
            <TextField
              id="Reward per response"
              label="Reward per response"
              style={{ width: "20rem" }}
            />
            <TextField
              id="Number of workers"
              label="Number of workers"
              style={{ width: "20rem" }}
            />
          </form>
        </div>
      </div>
    </Container>
  );
}
