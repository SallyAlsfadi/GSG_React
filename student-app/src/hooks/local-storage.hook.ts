import { useEffect, useState } from "react";
import { IStudent } from "../types";

const useLocalStorage = (state: any, storageKey: string) => {
  const [storedData, setStoredData] = useState<any>();
  const storedata = (newData: any) => {
    if (typeof state === "object") {
      localStorage.setItem(storageKey, JSON.stringify(newData));
    } else localStorage.setItem(storageKey, newData.toString());
  };
  useEffect(() => {
    const strData = localStorage.getItem(storageKey);
    let storedData;
    try {
      if (strData !== null) {
        setStoredData(JSON.parse(strData));
      } else {
        setStoredData(null);
      }
    } catch {
      setStoredData(strData);
    }
  }, []);
  useEffect(() => {
    if (typeof state == "object") {
      localStorage.setItem(storageKey, JSON.stringify(state));
    } else {
      localStorage.setItem(storageKey, state.tostring());
    }
  }, [state, storageKey]);

  return {
    storedData,
  };
  // console.log("Hello for App!!"); // first mount first rendering
  // const storedData: IStudent[] = JSON.parse(
  //   localStorage.getItem("student-list") || "[]" //depedency array - to only run in the first mount , if there is no d.array it will run each time
  //  ); //the benefits ! call api , or load the data from the storage!, ask user to accept cookies
};

export default useLocalStorage;
