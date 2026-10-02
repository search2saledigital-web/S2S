export default function Loading() {
    return (
        <div className="min-h-screen bg-[#020618] px-6 pt-32">
            <div className="max-w-[1000px] mx-auto animate-pulse">
                <div className="h-4 w-28 rounded bg-white/10" />
                <div className="mt-8 h-12 w-3/4 rounded bg-white/10" />
                <div className="mt-4 h-5 w-40 rounded bg-white/10" />
                <div className="mt-10 aspect-video rounded-2xl bg-white/10" />
                <div className="mt-10 space-y-4">
                    <div className="h-4 rounded bg-white/10" />
                    <div className="h-4 rounded bg-white/10" />
                    <div className="h-4 w-2/3 rounded bg-white/10" />
                </div>
            </div>
        </div>
    );
}