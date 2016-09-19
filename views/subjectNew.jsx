var React = require('react')
var DefaultLayout = require('./layout/master');

var NewSubjectComponent = React.createClass({
	render: function(){

		return (
			<DefaultLayout name={this.props.name}>
				<div className='row'>
					<form action='/api/subjects/' method='post'>

						<div className='form-group'>
							<label htmlFor="subjectName">Subject Name:</label>
							<input id='subjectName' name="name" type="text" />
						</div>
						<div className='form-group'>
							<label htmlFor='subjectDescription'>Description:</label>
							<input id='subjectDescription' name="description" type="text" /><br/>
						</div>
						<input className="btn btn-primary" type="submit" />
					</form>
				</div>
			</DefaultLayout>
		);
	}
});
module.exports = NewSubjectComponent;