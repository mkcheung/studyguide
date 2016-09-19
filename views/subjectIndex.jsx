var React = require('react');
var DefaultLayout = require('./layout/master');

var IndexComponent = React.createClass({

	render: function(){

		var flashMessage;
		if((typeof this.props.flashMessage !== 'undefined') && (this.props.flashMessage.length)) {
			flashMessage = React.createElement("div", {className: "flash alert alert-success"}, this.props.flashMessage);
		}
		return (
			<DefaultLayout name={this.props.name}>

				<div className='jumbotron'>
					<h1>Subjects</h1>
				</div>
				{flashMessage}
				<div className='row'>
					<div className='col-xs-6'>
						Subject Name
					</div>
					<div className='col-xs-6'>
						Description
					</div>
				</div>
				<ul>
					{this.props.allSubjects.map(function(subject) {
						return <li><div className='row'><div className='col-xs-6'>{subject.name}</div><div className='col-xs-6'>{subject.description}</div></div></li>;
					})}
				</ul>
				<a className="btn btn-primary" href="/api/subjects/new" role="button">New Subject</a>
			</DefaultLayout>
		);
	}
});

module.exports = IndexComponent;