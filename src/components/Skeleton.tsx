export default function Skeleton({ count = 3 }: { count?: number }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 animate-pulse">
            {Array.from({ length: count }).map((_, i) => (
                <div key={i} className="h-32 bg-gray-300 rounded"></div>
            ))}
        </div>
    );
}
