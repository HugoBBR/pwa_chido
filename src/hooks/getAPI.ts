import { useAuthInfo } from "@propelauth/react";
import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";

//TODO: ADD functions to patch and post with react query
export default function GetITOSAPI(props: { endpoint: any; }) {
    const authInfo:any = useAuthInfo()

    const callEndpoint = async (params: { endpoint: any; }) => {

      if (!authInfo) {
        throw Error("No active account!");
      }
      const accessToken=authInfo['accessToken']

  
      const options = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      };
  
      const url = `${import.meta.env.VITE_ITOS_API}${params.endpoint}`;
      const response = await fetch(url, options);
      if (!response.ok) {
        const responseData = await response.json();
        console.log(responseData);
        throw new Error(`${response.status} ${response.statusText}`);
      }
      const responseData = await response.json();
      return responseData;
    };
  
    return useQuery(["GET", props.endpoint], () => callEndpoint(props), { retry: false });
  }
  