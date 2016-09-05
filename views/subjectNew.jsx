var React = require('react')

var NewSubjectComponent = React.createClass({
	render: function(){
		return (
			<html lang="en">
				<head>
					<title>
					New Subject
					</title>
				</head>
				<body>
					<div class="container-fluid">
						<form action='/api/subjects/' method='post'>
							<input name="subject" type="text" />
							<input name="description" type="text" />
							<input name="description" type="submit" />
						</form>
					</div>
				</body>
			</html>
		);
	}
});
module.exports = NewSubjectComponent;