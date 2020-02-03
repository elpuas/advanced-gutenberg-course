<?php

namespace Adv_Gutenberg_Courses\Example_Blocks;


add_filter( 'block_categories', function( $categories, $post ) {
	return array_merge(
		$categories,
		[
			[
                'slug' => 'wdsblocks',
                'icon' => 'wordpress-alt',
				'title' => __( 'WDS Blocks', 'wdsblocks' ),
			],
		]
	);
}, 10, 2 );