var React = require('react');

var IndexComponent = React.createClass({
	render: function(){
		return (
			<html lang="en">
				<head>
					<title>
					Subjects
					</title>
					<link href='//netdna.bootstrapcdn.com/bootstrap/4.0.0-alpha.3/css/bootstrap.min.css' rel='stylesheet'/>
				</head>
				<body>
					<div><span>Subject Name</span> <span>Description</span></div>
					<ul>
						{this.props.allSubjects.map(function(subject) {
							return <li><div><span>{subject.name}</span> <span>{subject.description}</span></div></li>;
						})}
					</ul>
				</body>
			</html>
		);
	}
});

module.exports = IndexComponent;