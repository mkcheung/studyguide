var React = require('react');
var DefaultLayout = require('./layout/master');

var IndexComponent = React.createClass({
	render: function(){
		return (
			<DefaultLayout name={this.props.name}>
				<div class='container-fluid'>
					<div><span>Subject Name</span> <span>Description</span></div>
					<ul>
						{this.props.allSubjects.map(function(subject) {
							return <li><div><span>{subject.name}</span> <span>{subject.description}</span></div></li>;
						})}
					</ul>
					<a class="btn btn-primary" href="/api/subjects/new" role="button">New Subject</a>
				</div>
			</DefaultLayout>
		);
	}
});

module.exports = IndexComponent;