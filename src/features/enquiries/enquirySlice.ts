import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { EnquiryPayload } from "@/types/api";

type EnquiryState = { draft: EnquiryPayload; submittedCount: number };
const initialState: EnquiryState = {
  draft: { name: "", phone: "", department: "General enquiry", message: "" },
  submittedCount: 0,
};
const enquirySlice = createSlice({
  name: "enquiries",
  initialState,
  reducers: {
    updateDraft(state, action: PayloadAction<Partial<EnquiryPayload>>) {
      state.draft = { ...state.draft, ...action.payload };
    },
    markEnquiryPrepared(state) {
      state.submittedCount += 1;
    },
    resetDraft(state) {
      state.draft = initialState.draft;
    },
  },
});
export const { updateDraft, markEnquiryPrepared, resetDraft } = enquirySlice.actions;
export default enquirySlice.reducer;
