export const dynamic = 'force-dynamic';

const DeviceTracking = () => {
    return (
        <div className="h-[calc(100vh-6rem)] w-full">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                    <h1 className="text-3xl font-black text-slate-800 tracking-tight">Device Tracking</h1>
                    <p className="text-slate-500 font-medium">PanCares Global Monitor</p>
                </div>
            </div>

            <div className="card w-full h-[calc(100%-4rem)] p-0 overflow-hidden shadow-xl border-slate-200 border relative">
                <iframe
                    src="https://bi.pancares.com/login?redirect=/dealer/device"
                    className="w-full h-full border-0 absolute top-0 left-0"
                    title="Device Tracking"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                ></iframe>
            </div>
        </div>
    );
};

export default DeviceTracking;
