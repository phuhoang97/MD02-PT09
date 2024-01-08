import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getCars = createAsyncThunk("getDataCars", async () => {
  const response = await axios.get("http://localhost:8000/cars");
  return response.data;
});

export const deleteCars = createAsyncThunk("deleteDataCars", async (idCars) => {
  await axios.delete(`http://localhost:8000/cars/${idCars}`);
  return idCars;
});

export const postCars = createAsyncThunk("postDataCars", async (car) => {
  const response = await axios.post("http://localhost:8000/cars", car);
  return response.data;
});

export const putCars = createAsyncThunk("putDataCars", async (obj) => {
  /*{
    id: 2,
    inputForm: {...}
  }*/
  const response = await axios.put(
    `http://localhost:8000/cars/${obj.id}`,
    obj.inputForm
  );
  return response.data;
});

const carSlice = createSlice({
  name: "cars",
  initialState: {
    cars: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    // Để xử lý khi gọi api. hỗ trợ nhận các trạng thái của api được trả về
    // api khi trả về: "Pending" || "Fulfilled" || "Rejected"
    builder.addCase(getCars.pending, (state, action) => {
      state.status = "Loading";
    });
    builder.addCase(getCars.fulfilled, (state, action) => {
      state.cars = action.payload;
      state.status = "Fulfilled";
    });
    builder.addCase(getCars.rejected, (state, action) => {
      state.error = "Error";
    });
    builder.addCase(deleteCars.fulfilled, (state, action) => {
      state.cars = state.cars.filter((e) => e.id !== action.payload);
    });
    builder.addCase(postCars.fulfilled, (state, action) => {
      state.cars.push(action.payload);
    });
    builder.addCase(putCars.fulfilled, (state, action) => {
      state.cars = state.cars.map((car) =>
        car.id === action.payload.id ? action.payload : car
      );
    });
  },
});

export default carSlice.reducer;
