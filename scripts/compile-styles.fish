set base (pwd)
set input $base/style
set output $base/static/css

set compressed 1
set no_source_maps 1
set no_embed_sources 1

set cmd sass
if test $compressed -eq 1
	set cmd $cmd --style=compressed
end

if test $no_source_maps -eq 1
	set cmd $cmd --no-source-map
else
	if test $no_embed_sources -eq 1
		set cmd $cmd --no-embed-source-map
	else
		set cmd $cmd --embed-source-map
	end
end

command $cmd $input/main.scss $output/index.css

for file in $input/pages/*
	set name (basename $file .scss)
	set input_name (printf "%s.scss" $name)
	set output_name (printf "%s.css" $name)
	command $cmd $input/pages/$input_name $output/pages/$output_name
end

