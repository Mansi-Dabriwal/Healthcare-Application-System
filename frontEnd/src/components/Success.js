import React from 'react'
import { Button } from "@material-ui/core";

const Success = () => {
  return (
    <div className='' style={{marginTop: "100px"}}>
        <h4 style={{fontSize: "2rem"}}>Congrats, You have successfully completed the questionnaire</h4>
        <p style={{fontSize: "1.5rem"}}>Continue to Sign up page</p>
        <Button
          style={{
            background: "#3E78B2",
            color: "#FFFFFF"
          }}
          label="Continue"
        //   onClick={this.continue}
        >
          {" "}
          Sign Up
        </Button>
    </div>

  )
}

export default Success