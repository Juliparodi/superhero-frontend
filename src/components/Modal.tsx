interface Props {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, children }: Props) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-4 rounded shadow relative w-96">
                <button onClick={onClose} className="absolute top-2 right-2">X</button>
                {children}
            </div>
        </div>
    );
}
