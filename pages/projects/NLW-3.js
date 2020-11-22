const work_in_progress = '../under_construction.svg'

const imageSize = 450
const div__title = {
    padding: '20px 0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}
const div__center = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}

export default function NLW3() {
    return (
        <>
            <div style={div__title}>
                <h1>NLW-3</h1>
            </div>
            <div style={div__center}>
                <img src={work_in_progress} width={imageSize} height={imageSize} alt="work in progress (SVG)"/>
            </div>
            <div style={div__center}>
                    <span>Work in progress...</span>
            </div>
        </>
    )
}