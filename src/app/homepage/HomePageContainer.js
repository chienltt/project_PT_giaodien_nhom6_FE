import React from 'react'
import "./HomePageContainer.css"

const HomePageContainer = (props)=>{
    return(
        <div className="hm-pg ">

            <div class="row1">
                <div className="hm-pg-text1 col-xl-7 col-sm 12  ">
                    <p>Stop Buying. <strong>Start Trading</strong>.</p>
                </div>
            </div>

            <div class="row2">
                <div className="hm-pg-text2 col-xl-6 col-sm 12">
                    <p>
                        <span>
                            <strong>Save Money</strong><strong>. Help the Environment.</strong>
                        </span>
                    </p>
                    <p><span >People want your stuff!</span></p>

                </div>

            </div>
        </div>
    )
}
export default HomePageContainer