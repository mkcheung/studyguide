var React = require('react')
var DefaultLayout = require('./layout/master');

var NewSubjectComponent = React.createClass({
	render: function(){
		return (
			<DefaultLayout name={this.props.name}>
				<div className="container-fluid">
					<form action='/api/subjects/' method='post'>
						<input name="name" type="text" />
						<input name="description" type="text" />
						<input type="submit" />
					</form>
				</div>
			</DefaultLayout>
		);
	}
});
module.exports = NewSubjectComponent;