import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load: PageLoad = async ({ params }) => {	
    const { slug } = params;

    try {
        const componentModule = await import(`$lib/data/projects/${slug}.svelte`);
        const component = componentModule.default;

        return {
            component,
        };
    } catch (e) {
        throw error(404, 'Project not found');
    }
};
