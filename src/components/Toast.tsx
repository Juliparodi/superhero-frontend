interface ToastProps {
    message: string;
    type?: "success" | "error";
}

export default function Toast({ message, type = "success" }: ToastProps) {
    return (
        <div className={`fixed bottom-4 right-4 px-4 py-2 rounded shadow text-white
      ${type === "success" ? "bg-green-500" : "bg-red-500"}`}>
            {message}
        </div>
    );
}
