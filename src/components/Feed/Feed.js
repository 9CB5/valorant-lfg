import React, { Component } from 'react';
import './Feed.css';
import Group from '../Group/Group';
import { FaChevronUp } from 'react-icons/fa';
import {Transition, animated} from 'react-spring/renderprops'
import YourGroup from '../Group/YourGroup';

class Feed extends Component {

    state = {
        isScrolled: false
    }

    componentDidMount() {
        window.addEventListener('scroll', this.scrollHandler);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.scrollHandler);
    }

    scrollHandler = () => {
        
        if (window.scrollY > 0) {
            this.setState({isScrolled: true});
        } else {
            this.setState({isScrolled: false});
        }
    }

    backToTopHandler = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">

                        {this.props.yourGroup ? <YourGroup group={this.props.yourGroup} 
                            deleteGroup={this.props.deleteGroup} 
                            deleteMember={this.props.deleteMember}/> : ''}

                        <Transition
                            items={this.props.groups}
                            keys={item => item.id}
                            from={{opacity: 0}}
                            enter={{opacity: 1}}
                            leave={{opacity: 0}}
                            trail={100}
                        >
                            {item => props => 
                                <div style={props}>
                                    <Group group={item} 
                                        fillRole={this.props.fillRole}/>
                                </div>
                            }
                        </Transition>
                    </div>
                    <button className={this.state.isScrolled ? 'fade-in back-to-top' : 'fade-out back-to-top'} 
                        onClick={this.backToTopHandler}>
                        <FaChevronUp/>
                    </button>

                </div>
            </div>
        )
    }
}

export default Feed

{/* {this.props.groups.map(
    (g) => <Group key={g.id} group={g} fillRole={this.props.fillRole}/>
)}                        */}

