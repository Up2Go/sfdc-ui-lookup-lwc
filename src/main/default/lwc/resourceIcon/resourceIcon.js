import resource from '@salesforce/resourceUrl/teamIcons';
import Icon from 'c/icon';

export default class ResourceIcon extends Icon {
	constructor() {
		super({"2Team": resource});
	}
}

