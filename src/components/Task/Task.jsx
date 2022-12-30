import React from "react"

const Task = () => {
    return (
        <div className="task">
            <div className="task__main">
                <div className="task__main_header">My first task</div>
                <div className="task__main_date">31 december</div>
            </div>
            {/* <div className="task__id">1</div> */}
            {/* <div className="task__description">I will create the best app in the world</div> */}
            
            <div className="task__control">
                <div className="task__success"></div>
                <div className="task__warning"></div>
            </div>
        </div>
    )
}

export default Task