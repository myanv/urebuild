
export default function Statistics() {
    return (
        <div className="stats stats-vertical w-full text-center text-3xl lg:stats-horizontal shadow mx-10 mb-10">
        
            <div className="stat">
                <div className="stat-title">Business loans of total...</div>
                <div className="stat-value text-secondary">$47,000 USD</div>
            </div>
            
            <div className="stat">
                <div className="stat-title">Business coaching and mentorship of...</div>
                <div className="stat-value text-secondary">4</div>
                <div className="stat-desc text-xl">Uyghur Enterprises</div>
            </div>
            
            <div className="stat">
                <div className="stat-title">Childcare grants to...</div>
                <div className="stat-value text-secondary">36</div>
                <div className="stat-desc text-xl">children, 27 women supported</div>
            </div>

            <div className="stat">
                <div className="stat-title">Student Relief & Training Grants for...</div>
                <div className="stat-value text-secondary">23</div>
                <div className="stat-desc text-xl">Uyghur students</div>
            </div>
        
    </div>
    )
}