import React from "react"
import "./UserInfoContainer.scss"

const UserInfoContainer = (props) => {
    const user= props.user
    return (
        <div className={"info-content"} style={{margin: "15px"}}>
            <h5>Thông tin cá nhân</h5>
            <div>
                <strong>User Name:</strong> <span>{user.username}</span>
            </div>
            <div>
                <strong>Date of birth:</strong> <span>{user.date_of_birth}</span>
            </div>
            <div>
                <strong>Gender:</strong> <span>{user.gender}</span>
            </div>
            <hr/>
            <div>
                <strong>User Id:</strong> <span>{user.id}</span>
            </div>
            <div>
                <strong>Email contact:</strong> <span>{user.email}</span>
            </div>
            <div>
                <strong>Phone number: </strong> <span>{user.phone_number}</span>
            </div>
        </div>
    )
}
export default UserInfoContainer;