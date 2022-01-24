
import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: "us-east-1_qbDuE37RH",
    ClientId: "5rvkpmb6hj4l3e2igpuqe61bv0"
}

export default new CognitoUserPool(poolData);