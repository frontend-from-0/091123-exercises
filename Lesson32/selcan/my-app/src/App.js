import { HeadingL } from './shared-components/typography/HeadingL';
import { RadioInput } from './shared-components/MultipleSelectionElement/RadioInput';
import { MultipleSelectionElement } from './shared-components/MultipleSelectionElement';
import { QuizData } from './data';
import { HeadingM } from './shared-components/typography/HeadingM';
import { HeadingS } from './shared-components/typography/HeadingS';
import { BodyS } from './shared-components/typography/BodyS';
import { Display } from './shared-components/typography/Display';
import { BodyM } from './shared-components/typography/BodyM';


export const App = () => {
	return (
		<main>
			<div>
				<HeadingL title='Welcome to the' />
				<HeadingL title='Frontend Quiz!' bold />
				{/* <h1>
					Welcome to the <span className='text-bold'>Frontend Quiz!</span>
				</h1> */}
				<h4>Pick a subject to get started.</h4>
lesson32--selcan
				<HeadingM title="Lorem ipsum dolor" headM />
				<HeadingS title="Lorem ipsum dolor" headS />
				<BodyS title="Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna." mid />
				<Display title="Lorem" dis />
				<BodyM title="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti." />
=======
				<HeadingM title="Lorem ipsum dolor" bold />
				<HeadingS title="Lorem ipsum dolor" bold />
				<BodyS title="Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna." bold />
				<Display title="Lorem" bold />
				<BodyM title="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti." bold />
 main
			</div>
			<MultipleSelectionElement>
				{QuizData.map(category => {
					<RadioInput name={category.categoryName.toLowerCase()} title={category.categoryName} inputGroupName='category' />
				})}
				{/* <RadioInput name='html' title='HTML' inputGroupName='category'/>
        <RadioInput name='css' title='CSS' inputGroupName='category'/>
        <RadioInput name='javascript' title='Javascript' inputGroupName='category'/>
        <RadioInput name='accessibility' title='Accessibility' inputGroupName='category'/> */}
			</MultipleSelectionElement>
		</main>
	);
};
