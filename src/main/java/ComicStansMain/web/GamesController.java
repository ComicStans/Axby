package ComicStansMain.web;

import ComicStansMain.data.Game;
import ComicStansMain.data.GamesRepository;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.time.*;
import java.util.Collection;

@CrossOrigin
@RestController
@AllArgsConstructor
@RequestMapping(value = "api/games", headers = "Accept=application/json")
public class GamesController {
    private final GamesRepository gamesRepository;

    @GetMapping
    private Collection<Game> getAll() {
        return gamesRepository.findAll();
    }
    @PostMapping
    private void createGame(@RequestBody Game game) {
//        The release date comes in as utc from the api, so we'll have to convert it before saving it to our table
        game.setRelease_date(LocalDate.now());
        gamesRepository.save(game);
    }
    @PutMapping("{id}")
    private void updateGame(@PathVariable long id, @RequestBody Game game) {
//        We'll have to talk about which fields we want to be updateable and which aren't. I'm just doing summery
//        for now to make sure the endpoint works, but we'll edit this class and pick which ones we want to be changed
//        by the user
        Game updatedGame = gamesRepository.getById(id);
        updatedGame.setSummary(game.getSummary());
        gamesRepository.save(updatedGame);
    }
    @DeleteMapping("{id}")
    private void deleteGame(@PathVariable long id) {
        gamesRepository.deleteById(id);
    }

}