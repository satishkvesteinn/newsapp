import React from 'react'
import News from '../components/News'

function Health(props) {
    return (
        <div>
            <News category={props.category}
            pagesize = {props.pagesize}
            set = {props.seProgress}
            />
        </div>
    )
}

export default Health
