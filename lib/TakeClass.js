import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
    getInitialState() {
      return {
        currentVid: this.props.instructors.videos[0],
        modalCover: false
      }
    },
    onHandleClick(e){
      this.setState(
        {
          currentVid: this.props.videos[e.target.id],
          currentVidId: e.target.id,
          modalCover: true
        }
      )
    },
    onHandleClickExitModal(e){
      this.setState(
        {
          modalCover: false
        }
      )
    },
    onHandleClickPrev(e){
      var newVidId = (Number(this.refs.modalVid.id) -1);
      if(newVidId < 0){

      }else{
        this.setState(
          {
            currentVid: this.props.instructors.videos[newVidId],
            currentVidId: newVidId
          }
        )
      }
    },
    onHandleClickNext(e){
      var newVidId = (Number(this.refs.modalVid.id) + 1);
      if(newVidId >= this.props.instructors.videos.length){
      }else{
        this.setState(
          {
            currentVid: this.props.instructors.videos[newVidId],
            currentVidId: newVidId
          }
        )
      }
    },
    render(){
      return(
        <div>
          <h1>Technique</h1>
            <a className="video">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/yF3_FsKMUYM" frameborder="0" allowfullscreen></iframe>
            </a>
            <div>
                <button className="next__btn">Next video</button>
            </div>
      </div>
      )
    }
  })
