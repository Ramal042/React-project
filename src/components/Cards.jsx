import './Cards.css'

export default function Cards() {
    return (
        <>
            <div className='div'>
                <div className='contents'>
                    <img src="./Icon 001.png" alt="" />
                    <h2>Benchmarks</h2>
                    <br />
                    <p>See how you stack up against comparable <br /> companies in similar stages.</p>
                </div>
                <div className='contents'>
                    <img src="./Icon 002.png" alt="" />
                    <h2>Pricing Audit</h2>
                    <br />
                    <p>Benchmark the health of your monetization <br /> and pricing strategy.</p>
                </div>
                <div className='contents'>
                    <img src="./Icon 003.png" alt="" />
                    <h2>Retention Audit</h2>
                    <br />
                    <p>Audit where revenue leakage exists and <br /> where you can increase retention.</p>
                </div>
                <img src="" alt="" />
            </div>
        </>
    )
}