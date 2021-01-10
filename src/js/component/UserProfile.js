import React from "react";
import PropTypes from "prop-types";

function Avatar(props) {
	return <img src={props.url} />;
}

Avatar.propTypes = {
	url: PropTypes.string
};

function UserName(props) {
	return (
		<div>
			<dl>
				<dt>Name</dt>
				<dd>{props.data.name}</dd>

				<dt>Last Name</dt>
				<dd>{props.data.lastName}</dd>

				<dt>Age</dt>
				<dd>{props.data.age}</dd>
			</dl>
		</div>
	);
}

UserName.propTypes = {
	data: PropTypes.object
};

function Bio(props) {
	return <div>{props.description}</div>;
}

Bio.propTypes = {
	description: PropTypes.string
};

function UserProfile(props) {
	return (
		<div>
			<Avatar url={props.avatarUrl} />
			<UserName data={props.userPersonalData} />
			<Bio description={props.description} />
		</div>
	);
}

UserProfile.propTypes = {
	avatarUrl: PropTypes.string,
	userPersonalData: PropTypes.object,
	description: PropTypes.string
};

export default UserProfile;
