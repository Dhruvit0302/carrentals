import {CognitoUserPool} from "amazon-cognito-identity-js";

const poolData ={
    UserPoolId: "us-east-1_AbMxCA221",
    ClientId: "6obgaug7vsgdl23h86qfiq451g"
}
export default new CognitoUserPool(poolData);

