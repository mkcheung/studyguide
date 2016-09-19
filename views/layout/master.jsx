var React = require('react');

var MasterLayout = React.createClass({
	render: function(){

		return (
			<html lang="en">
				<head>
					<title>
						{this.props.name}
					</title>
					<link href='//netdna.bootstrapcdn.com/bootstrap/4.0.0-alpha.3/css/bootstrap.min.css' rel='stylesheet'/>
					<link href='/stylesheets/style.css' rel='stylesheet'/>
				</head>
				<body>
					<div className='container-fluid'>
						<div className='col-xs-3'></div>
						<div className='col-xs-6'>
							{this.props.children}
						</div>
						<div className='col-xs-3'></div>
					</div>
						<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.0.0/jquery.min.js" integrity="sha384-THPy051/pYDQGanwU6poAc/hOdQxjnOEXzbT+OuUAFqNqFjL+4IGLBgCJC3ZOShY" crossOrigin="anonymous"></script>
						<script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.2.0/js/tether.min.js" integrity="sha384-Plbmg8JY28KFelvJVai01l8WyZzrYWG825m+cZ0eDDS1f7d/js6ikvy1+X+guPIB" crossOrigin="anonymous"></script>
						<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.3/js/bootstrap.min.js" integrity="sha384-ux8v3A6CPtOTqOzMKiuo3d/DomGaaClxFYdCu2HPMBEkf6x2xiDyJ7gkXU0MWwaD" crossOrigin="anonymous"></script>
						<script src="/javascripts/pageEffects.js"></script>
				</body>
			</html>
		);
	}
});

module.exports = MasterLayout;