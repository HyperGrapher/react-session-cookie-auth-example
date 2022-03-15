import toast from "react-hot-toast";

export const notifySuccess = (msg: string) =>
	toast.success(msg, {
		duration: 4000,
		position: "bottom-right",
		style: { fontSize: "0.9rem" },
	});

export const notifyError = (err: string) =>
	toast.error(err, {
		duration: 4000,
		position: "bottom-right",
		style: { fontSize: "0.85rem", /* marginTop: '44px'  */},
	});
