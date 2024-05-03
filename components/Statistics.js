
export default function Statistics() {
    return (
        <div className="stats stats-vertical w-[90%] m-auto text-center text-lg lg:text-3xl lg:stats-horizontal shadow">
        
            <div className="stat">
                <div className="stat-title">Business loans of total</div>
                <div className="stat-value text-secondary">$47,000 USD</div>
            </div>
            
            <div className="stat">
                <div className="stat-title">Business coaching & mentorship of</div>
                <div className="stat-value text-secondary">4</div>
                <div className="stat-desc text-lg">Uyghur Enterprises</div>
            </div>
            
            <div className="stat">
                <div className="stat-title">Childcare grants to</div>
                <div className="stat-value text-secondary">36</div>
                <div className="stat-desc text-lg">children</div>
            </div>

            <div className="stat">
                <div className="stat-title">Supported</div>
                <div className="stat-value text-secondary">27</div>
                <div className="stat-desc text-lg">women</div>
            </div>

            <div className="stat">
                <div className="stat-title">Student relief & training grants for</div>
                <div className="stat-value text-secondary">23</div>
                <div className="stat-desc text-lg">Uyghur students</div>
            </div>
        
    </div>
    )
}