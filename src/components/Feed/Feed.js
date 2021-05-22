import React, { Component } from 'react';
import './Feed.css';
import Group from '../Group/Group';
import { FaChevronUp } from 'react-icons/fa';
import {Transition, animated} from 'react-spring/renderprops'
import YourGroup from '../Group/YourGroup';
import { Form, Button } from 'react-bootstrap';

class Feed extends Component {

    state = {
        isScrolled: false,

        sorter: 'Latest',
        roleFilter: 'Any',
        regionFilter: 'Any'
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

    sortAndFilterFeedHandler = () => {
        this.props.sortAndFilter(this.state.sorter, this.state.roleFilter, this.state.regionFilter);
    }

    resetFilterHandler = () => {
        this.setState({sorter: 'Latest', roleFilter: 'Any', regionFilter: 'Any'});
        this.props.resetFilter();
    }


    render() {
        return (
            <div className="container min-vh-100">
                <div className="row" >
                    <div className="col-12 text-center">
                        <div className="sort-and-filter">
                            <Form inline>
                                <Form.Group controlId="order">
                                    <Form.Label className="my-1 mr-2">Order:  </Form.Label>
                                    <Form.Control as="select" className="my-1 mr-2 sfdropdown" 
                                        value={this.state.sorter}
                                        onChange={e=>this.setState({sorter: e.target.value})}
                                    >
                                        <option>Latest</option>
                                        <option>Oldest</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group controlId="role">
                                    <Form.Label className="my-1 mr-2">Role:  </Form.Label>
                                    <Form.Control as="select" className="my-1 mr-2" 
                                        value={this.state.roleFilter}
                                        onChange={e=>this.setState({roleFilter: e.target.value})}
                                    >
                                        <option>Any</option>
                                        <option>Duelist</option>
                                        <option>Controller</option>
                                        <option>Sentinel</option>
                                        <option>Initiator</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group controlId="region">
                                    <Form.Label className="my-1 mr-2">Region:  </Form.Label>
                                    <Form.Control as="select" className="my-1 mr-2" 
                                        value={this.state.regionFilter}
                                        onChange={e=>this.setState({regionFilter: e.target.value})}
                                    >
                                        <option>Any</option>
                                        <option>EU</option>
                                        <option>NA</option>
                                        <option>AS</option>
                                    </Form.Control>
                                </Form.Group>      
                            </Form>

                            <Button className="filter-button" onClick={this.sortAndFilterFeedHandler}>Filter</Button>
                            <Button className="reset-button" onClick={this.resetFilterHandler}>Reset</Button>
                        </div>

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

